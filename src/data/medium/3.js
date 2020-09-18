export default {
  edges: [
    {
      source: '4156c6a5',
      target: '8a4c330a'
    },
    {
      source: '8a4c330a',
      target: '48fa79d0'
    },
    {
      source: '48fa79d0',
      target: '20a4364a'
    },
    {
      source: '20a4364a',
      target: '69f8e7ac'
    },
    {
      source: 'f7b62b1a',
      target: '76ddffce'
    },
    {
      source: '3f82e2e9',
      target: '76ddffce'
    },
    {
      source: '76ddffce',
      target: '61aea938'
    },
    {
      source: '61aea938',
      target: '23e0c9e9'
    },
    {
      source: '40cc0777',
      target: '23e0c9e9'
    },
    {
      source: '4156c6a5',
      target: '27087ee9'
    },
    {
      source: 'd577578a',
      target: '27087ee9'
    },
    {
      source: '27087ee9',
      target: '3f82e2e9'
    },
    {
      source: '27087ee9',
      target: '40cc0777'
    },
    {
      source: '27087ee9',
      target: '57103b64'
    },
    {
      source: '27087ee9',
      target: '7a1cb4c1'
    },
    {
      source: '57103b64',
      target: 'a158446c'
    },
    {
      source: '7a1cb4c1',
      target: 'a158446c'
    },
    {
      source: 'f1f1425b',
      target: 'a158446c'
    },
    {
      source: 'a158446c',
      target: 'f7b62b1a'
    }
  ],
  layers: [],
  nodes: [
    {
      full_name: 'predict',
      id: '76ddffce',
      name: 'Predict',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'report_accuracy',
      id: '23e0c9e9',
      name: 'Report Accuracy',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'split_data',
      id: '27087ee9',
      name: 'Split Data',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'train_model',
      id: 'a158446c',
      name: 'Train Model',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'example_iris_data',
      id: '4156c6a5',
      layer: null,
      name: 'Iris Data',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_model',
      id: 'f7b62b1a',
      layer: null,
      name: 'Example Model',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_predictions',
      id: '61aea938',
      layer: null,
      name: 'Example Predictions',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_test_x',
      id: '3f82e2e9',
      layer: null,
      name: 'Example Test X',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_test_y',
      id: '40cc0777',
      layer: null,
      name: 'Example Test Y',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_train_x',
      id: '57103b64',
      layer: null,
      name: 'Example Train X',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'example_train_y',
      id: '7a1cb4c1',
      layer: null,
      name: 'Example Train Y',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'parameters',
      id: 'f1f1425b',
      layer: null,
      name: 'Parameters',
      tags: [],
      type: 'parameters'
    },
    {
      full_name: 'params:example_test_data_ratio',
      id: 'd577578a',
      layer: null,
      name: 'Params:example Test Data Ratio',
      tags: [],
      type: 'parameters'
    },
    {
      full_name: '<lambda>',
      id: '8a4c330a',
      name: 'clean_iris',
      tags: [],
      type: 'task'
    },
    {
      full_name: '<lambda>',
      id: '20a4364a',
      name: 'analyze_iris',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'mart:catalog:94ef07e24f7a4f449374eebc7539cf34:0:iris1',
      id: '4156c6a5',
      name: 'Iris Data',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'mart:pipeline:02f87189820c488a9be6d9d32c43e20e:predict_iris',
      id: '69f8e7ac',
      name: 'Iris Analysis',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'mart:pipeline:e3c45346af804e27b992301e34333859:clean_iris',
      id: '48fa79d0',
      name: 'Cleaned Iris Data',
      tags: [],
      type: 'data'
    }
  ],
  tags: []
};
