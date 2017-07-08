# Tensorflow and deep learning - without a PhD by Martin Görner

Key concepts:

* RELU - rectified linear unit. Activation function that works better than sigmoid because in DNN could cause small gradients because of flatlines in the sigmoid function.
* Dropout - regularization method that just freezes random neurons per iteration.
* Learning rate decay - reduce learning rate exponentially to get better results with less noise.
* Convolutional neural networks - a neuron inspects only a part of an input e.g. for an image you have neurons inspecting many different slices of an image.
* Batch normalization - technique that improves our accuracy and generalizability. Doing mean normalization from logits (X*theta) before the activation function in every layer. The interesting thing here is that this is "learnable",
BN provides a formula like alpha (scale) * X + beta (offset) where you can still get the original value by setting alpha/beta accordingly.
Alpha is not useful when using relu. If doing batch normalization, reduce dropout value.
