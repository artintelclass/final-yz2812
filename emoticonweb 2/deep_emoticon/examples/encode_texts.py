# -*- coding: utf-8 -*-

""" Use DeepMoji to encode texts into emotional feature vectors.
"""
from __future__ import print_function, division
import example_helper
import json
import csv
import numpy as np
from deepmoji.sentence_tokenizer import SentenceTokenizer
from deepmoji.model_def import deepmoji_feature_encoding
from deepmoji.global_variables import PRETRAINED_PATH, VOCAB_PATH

test='I like！！！wow it'
test1='i like it!'
TEST_SENTENCES = [unicode(test, "utf-8"),unicode(test1, "utf-8")]

maxlen = 30
batch_size = 32



'''
        if len(vocabulary) > np.iinfo('uint16').max:
            raise ValueError('Dictionary is too big ({} tokens) for the numpy '
                             'datatypes used (max limit={}). Reduce vocabulary'
                             ' or adjust code accordingly!'
                             .format(len(vocabulary), np.iinfo('uint16').max))


'''



with open(VOCAB_PATH, 'r') as f:
    vocabulary = json.load(f)
st = SentenceTokenizer(vocabulary, 10)
tokenized= st.tokenize_sentences(TEST_SENTENCES)
print(tokenized)
