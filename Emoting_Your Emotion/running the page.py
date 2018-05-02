# -*- coding: utf-8 -*-
from flask import Flask, jsonify, render_template, request
import example_helper
import json
import csv
import numpy as np
from deepmoji.sentence_tokenizer import SentenceTokenizer
from deepmoji.model_def import deepmoji_emojis
from deepmoji.global_variables import PRETRAINED_PATH, VOCAB_PATH





op=open('kao.csv')
emoticons=[]
for i in op:
    line=i.strip().split(',')
    emoticons.append(line[0])
op.close()

def top_elements(array, k):
    ind = np.argpartition(array, -k)[-k:]
    return ind[np.argsort(array[ind])][::-1]


def emoticonit(sen):
    TEST_SENTENCES = [unicode(sen)]

    maxlen = 30
    batch_size = 32

    print('Tokenizing using dictionary from {}'.format(VOCAB_PATH))
    with open(VOCAB_PATH, 'r') as f:
        vocabulary = json.load(f)
        st = SentenceTokenizer(vocabulary, maxlen)
        tokenized = st.tokenize_sentences(TEST_SENTENCES)

    print('Loading model from {}.'.format(PRETRAINED_PATH))
    model = deepmoji_emojis(maxlen, PRETRAINED_PATH)
    model.summary()

    print('Running predictions.')
    prob = model.predict(tokenized)

# Find top emojis for each sentence. Emoji ids (0-63)
# correspond to the mapping in emoji_overview.png
# at the root of the DeepMoji repo.

    scores = []
    selected=[]
    num=1
    for i, t in enumerate(TEST_SENTENCES):
        t_tokens = tokenized[i]
        t_score = [t]
        t_prob = prob[i]
        ind_top = top_elements(t_prob, num)
        t_score.append(sum(t_prob[ind_top]))
        t_score.extend(ind_top)
        ind=ind_top.tolist()#list
        for i in range(num):
            print(emoticons[ind[i]])
            selected.append(emoticons[ind[i]])
        t_score.extend([t_prob[ind] for ind in ind_top])
        scores.append(t_score)
        print(t_score)
    return(selected)


app = Flask(__name__)

@app.route("/")
def index():
    
    return render_template("index.html")

@app.route('/add')
def add_numbers():
    """Add two numbers server side, ridiculous but well..."""
    a = request.args.get('a', 0, type=str)
    returned=emoticonit(a)
    return jsonify(result = returned[0])


app.run( debug = True)
