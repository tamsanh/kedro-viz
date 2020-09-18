export default {
  edges: [
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
    }
  ],
  tags: []
};
