# Machine Learning notes

All ML methods require:

* representation of features
* distance metric for feature vectors
* objective functions and constraints
* optimization method for learning the model
* evaluation method

## Supervised learning

Start with set of feature vector/value pairs

Goal is to find a model that predicts a value for a previously unseen feature vector

Regression model predicts a real number (infinite)

Classification models predicts a label (chosen from finite set of labels)

## Unsupervised learning

Start with feature vector, no labels

Goal: uncover latent structure in set of feature vectors

Clustering
 - define metric that captures how similar one feature vector is to another
 - group examples based on this metric

Different structures emerge depending on which features you choose.

## Choosing features

Features never fully describe the situation

Feature engineering
  - represent examples by feature vectors that will facilitate generalization.
  - don't overfit

We want to maximize the signal to noise ratio.

## Nearest neighbor

Simple classification algorithm.

When predicting label of new example find nearest example in the training data

Predict label associated with that data.

## k-nearest neighbors (KNN)

Pick some val for k, usually odd. Look at that number of neighbors, choose the label associated with the majority of those neighbors.

## Z-scaling

Each feature has a mean of 0 and a std deviation of 1.

```
def zScaleFeatures(vals):
  """ vals - seq. of floats """
  result = pylab.array(vals)
  mean = float(sum(result) / len(result))
  result = result - mean
  return result / pylab.std(result)
```

## Interpolation

Map minimum values to 0, max to 1, and linealy interpolate.

This means all features range from 0 to 1.

```
def iScaleFeatures(vals):
  minVal, maxVal = min(vals), max(vals)
  fit = pylab.polyfit([minVal, maxVal], [0, 1], 1)
  return pylab.polyval(fit, vals)
```

## k-means clustering

Constraint: exactly k non-empty clusters

```
randomly choose k examples as initial centroids
while true:
  create k clusters by assigning each example to closest centroid
  compute k new centroids by averaging examples in each cluster
  if centroids dont change:
    break
```
