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
    },

    {
      source: '93d834e1',
      target: '43ba0268'
    },
    {
      source: '872981f9',
      target: '43ba0268'
    },
    {
      source: 'f6d9538c',
      target: '43ba0268'
    },
    {
      source: 'c071dac9',
      target: '0d838494'
    },
    {
      source: '493ad53a',
      target: '0d838494'
    },
    {
      source: '7b2c6e04',
      target: '0d838494'
    },
    {
      source: '0d838494',
      target: 'd7b83b05'
    },
    {
      source: 'aed46479',
      target: '1d7bab50'
    },
    {
      source: '1d7bab50',
      target: '493ad53a'
    },
    {
      source: 'f1d596c2',
      target: 'a332a7f9'
    },
    {
      source: 'a332a7f9',
      target: 'c071dac9'
    },
    {
      source: 'd7b83b05',
      target: '279ff22f'
    },
    {
      source: 'f1f1425b',
      target: '279ff22f'
    },
    {
      source: '279ff22f',
      target: 'cae2d1c7'
    },
    {
      source: '279ff22f',
      target: '872981f9'
    },
    {
      source: '279ff22f',
      target: '9ca016a8'
    },
    {
      source: '279ff22f',
      target: 'f6d9538c'
    },
    {
      source: 'cae2d1c7',
      target: 'b12e81ea'
    },
    {
      source: '9ca016a8',
      target: 'b12e81ea'
    },
    {
      source: 'b12e81ea',
      target: '93d834e1'
    },

    {
      source: '48fa79d0',
      target: '0d838494'
    }
  ],
  layers: [],
  nodes: [
    {
      full_name: 'evaluate_model',
      id: '43ba0268',
      name: 'Evaluate Model',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'create_master_table',
      id: '0d838494',
      name: 'master_table',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'preprocess_companies',
      id: '1d7bab50',
      name: 'preprocessing_companies',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'preprocess_shuttles',
      id: 'a332a7f9',
      name: 'preprocessing_shuttles',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'split_data',
      id: '279ff22f',
      name: 'Split Data',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'train_model',
      id: 'b12e81ea',
      name: 'Train Model',
      tags: [],
      type: 'task'
    },
    {
      full_name: 'X_test',
      id: '872981f9',
      layer: null,
      name: 'X Test',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'X_train',
      id: 'cae2d1c7',
      layer: null,
      name: 'X Train',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'companies',
      id: 'aed46479',
      layer: null,
      name: 'Companies',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'master_table',
      id: 'd7b83b05',
      layer: null,
      name: 'Master Table',
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
      full_name: 'preprocessed_companies',
      id: '493ad53a',
      layer: null,
      name: 'Preprocessed Companies',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'preprocessed_shuttles',
      id: 'c071dac9',
      layer: null,
      name: 'Preprocessed Shuttles',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'regressor',
      id: '93d834e1',
      layer: null,
      name: 'Regressor',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'reviews',
      id: '7b2c6e04',
      layer: null,
      name: 'Reviews',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'shuttles',
      id: 'f1d596c2',
      layer: null,
      name: 'Shuttles',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'y_test',
      id: 'f6d9538c',
      layer: null,
      name: 'Y Test',
      tags: [],
      type: 'data'
    },
    {
      full_name: 'y_train',
      id: '9ca016a8',
      layer: null,
      name: 'Y Train',
      tags: [],
      type: 'data'
    },

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
