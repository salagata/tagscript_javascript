const LIMITS = {
  MAX_AI_EXECUTIONS: 1,
  MAX_API_MANIPULATIONS: 1,
  MAX_ATTACHMENTS: 10,
  MAX_COMPONENT_EXECUTIONS: 2,
  MAX_EMBEDS: 10,
  MAX_ITERATIONS: 450,
  MAX_NETWORK_REQUESTS: 15,
  MAX_NETWORK_REQUESTS_ML: 5,
  MAX_NETWORK_REQUESTS_OPENAI: 2,
  MAX_PAGES: 1000,
  MAX_STORAGE_GLOBAL_AMOUNT: 5,
  MAX_STORAGE_GUILD_AMOUNT: 5,
  MAX_STORAGE_CHANNEL_AMOUNT: 5,
  MAX_STORAGE_USER_AMOUNT: 5,
  MAX_STORAGE_KEY_LENGTH: 128,
  MAX_STORAGE_VALUE_LENGTH: 16384,
  MAX_TAG_EXECUTIONS: 2,
  MAX_TIME_REGEX: 25,
  MAX_VARIABLE_KEY_LENGTH: 64,
  MAX_VARIABLE_LENGTH: 1 * 1024 * 1024,
  MAX_VARIABLES: 100
}
const totalIterations = 500;
const privateVariables = {
  '__aiExecutions':0,
  '__apiManipulations':0,
  '__args':[],
  '__argsString':"",
  '__componentExecutions':0,
  '__fileSize':0,
  '__files':[],
  '__isFromChildParsing':0,
  '__iterationsRemaining':500,
  '__networkRequests':0,
  '__networkRequestsML':0,
  '__networkRequestsOpenAI':0,
  '__parentTagId':"",
  '__results':{},
  '__settings':{},
  '__tagExecutions':0
}
function parse(context,value,string,args,variables,tagContent,limits,shouldTrim) {

}