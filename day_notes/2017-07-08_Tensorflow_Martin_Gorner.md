# Tensorflow and deep learning - without a PhD by Martin Görner

Key concepts:

* RELU - rectified linear unit. Activation function that works better than sigmoid because in DNN could cause small gradients because of flatlines in the sigmoid function.
* Dropout - regularization method that just freezes random neurons per iteration.
* Learning rate decay - reduce learning rate exponentially to get better results with less noise.
* Convolutional neural networks - a neuron inspects only a part of an input e.g. for an image you have neurons inspecting many different slices of an image.
* Batch normalization - technique that improves our accuracy and generalizability. Doing mean normalization from logits (X*theta) before the activation function in every layer. The interesting thing here is that this is "learnable",
BN provides a formula like alpha (scale) * X + beta (offset) where you can still get the original value by setting alpha/beta accordingly.
Alpha is not useful when using relu. If doing batch normalization, reduce dropout value.
* Recurrent neural network - add the outputs of a layer to the inputs. It has internal state. This state is useful to create things like word prediction as you're typing. I think the number of times it recurs is how many states it can remember.
RNNs can also be used to write like the data they are fed e.g. RNN that writes Shakespeare plays.
RNNs are used to do translation and image labelling.
* LSTM - long short term memory. RNN cell. It's like an internal state update rule. This technique helps RNN converge? 
It determines what to forget and what to retain by using gates.
* GRU - gated recurrent unit. Also an internal state update rule. Cheaper RNN cell.
