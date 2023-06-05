
import {execute} from './request'

const GET='get'
const POST="post"


// 添加数据集市

export async function dataMarketMatkertAdd(params) {
  return execute(params,"/dataMarket/adddatamarkert",GET);
}

//查询创建人
export async function founderlist2(params) {
  return execute(params,"/dataMarket/founderlist",GET);
}

//查看表列表 添加集市数据表的时候使用
export async function findTablelist(params) {
  return execute(params,"/dataMarket/findTablelist",GET);
}

//查看表详细信息
export async function findTableDetail(params) {
  return execute(params,"/dataMarket/selecttableinfo",GET);
}

//查看集市列表
export async function findMarkets(params) {
  return execute(params,"/dataMarket/finddatamarkert",GET);
}

//查询数据监控内容
export async function findDataMonitor(params) {
  return execute(params,"/dataMarket/finddatamarkermonitorInfo",GET);
}

export async function findAllOrder(params) {
  return execute(params,"")
}



