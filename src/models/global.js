/*import dataMarketManager from '@/pages/dataMarket/dataMarketManager';*/
import  { founderlist2 , dataMarketMatkertAdd, findTablelist, findMarkets } from '../services/interface';

export default {
  namespace: 'dataMarketSpace',
  state: {
    records:[]

  },
  effects: {
    /*所有接口调用方法写在effects里*/

    *queryFounderList({ payload }, { select, call, put }) {
      const { data } = yield call(founderlist2, payload)
      console.log("查看创建人列表", data)
      if (data && data.code == 200) {
        yield put({
          type: 'querySuccess',
          payload: {
            personList: data.data
          }
        })
      }
    },
    *queryTableList({payload}, {select, call, put}){
      const { data } = yield call(findTablelist, payload)
      console.log("查看添加表", data)
      if(data && data.code == 200) {
        let ary=[]
        data.data && data.data.map(item=>{
          ary.push({
            key:item.id,
            name:item.tableName,
            size:item.tableSize+'KB',
            type:item.type,
          })
        })
        console.log("表数组!!!",ary)
        yield put({
          type: 'querySuccess',
          payload:{
            tableList:ary
          }
        })
      }
    },

    *findMarket({payload}, {select, call, put}){
      const { data } = yield call(findMarkets, payload)
      console.log("查看集市列表data", data)

      yield put({
        type:'querySuccess',
        /*处理返回的数据*/
        payload:{
          marketList:data.data.records,
        }
      })
    },

    *queryDataMarketAdd({payload}, {select, call, put}) {
      const { data } = yield call(dataMarketMatkertAdd, payload)
      console.log("添加数据集市data",data)
      console.log("添加数据集市payload",payload)
      yield put({
        type:'querySuccess',
        payload:{

        }
      })
    },


  },





  reducers: {
    querySuccess(state, action ) {
      return { ...state,...action.payload };
    },
  },
};
