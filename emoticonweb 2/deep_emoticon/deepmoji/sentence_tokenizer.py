import numpy as np
from word_generator import WordGenerator
from copy import deepcopy


class SentenceTokenizer():
    """ Create numpy array of tokens corresponding to input sentences.
        The vocabulary can include Unicode tokens.
    """

    def __init__(self, vocabulary, fixed_length, custom_wordgen=None,
                 ignore_sentences_with_only_custom=False, masking_value=0,
                 unknown_value=1):
        self.vocabulary = deepcopy(vocabulary)
        self.fixed_length = 30
        # Initialized with an empty stream of sentences that must then be fed
        # to the generator at a later point for reusability.
        # A custom word generator can be used for domain-specific filtering etc
        
        
        self.wordgen = WordGenerator(None, allow_unicode_text=True,
                                         ignore_emojis=False,
                                         remove_variation_selectors=True,
                                         break_replacement=True)
        print(self.wordgen)

    def tokenize_sentences(self, sentences, reset_stats=True, max_sentences=None):
        """ Converts a given list of sentences into a numpy array according to"""
        n_sentences = (max_sentences if max_sentences is not None
                       else len(sentences))
        tokens = np.zeros((n_sentences, self.fixed_length), dtype='uint16')
        

        # Returns words as strings and then map them to vocabulary
        self.wordgen.stream = sentences
        next_insert = 0
        for s_words, s_info in self.wordgen:
            s_tokens = self.find_tokens(s_words)

            if len(s_tokens) > self.fixed_length:
                s_tokens = s_tokens[:self.fixed_length]
            tokens[next_insert, :len(s_tokens)] = s_tokens
            next_insert += 1

        # For standard word generators all sentences should be tokenized
        # this is not necessarily the case for custom wordgenerators as they
        # may filter the sentences etc.
       
        return tokens

    def find_tokens(self, words):
        assert len(words) > 0
        tokens = []
        for w in words:
            try:
                tokens.append(self.vocabulary[w])
            except KeyError:
                tokens.append(self.unknown_value)
        return tokens

 