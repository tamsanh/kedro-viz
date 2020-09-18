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
    }
  ],
  nodes: [
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
