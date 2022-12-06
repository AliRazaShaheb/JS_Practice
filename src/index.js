const testJson = {
  doc_title: { value: "passport", error: false },
  "doc_label#1": { value: "pass", error: false },
  "field_label#1": { value: "name", error: false },
  "field_type#1": { value: "text", error: false },
  "field_label#2": { value: "gender", error: false },
  "field_type#2": { value: "select", error: false },
  "option#1": { value: "male", error: false },
  "option#2": { value: "female", error: false },
};

const jsonMaker = ()=> {
  const obj_title={
    title:null,
    docs:[]
  }
  const obj_docs={
    doc_title:null,
    fields:[]
  }
  const obj_fields={
    label:null,
    type:null,
    options:[]
  }
  const arr_options=[]

  for(let key in testJson){
    const lookupKey = key.split('#')[0]
    if(key==="doc_title"){
      obj_title.title = testJson[key].value
    }
    if(lookupKey === "doc_label" ){
      const doc_ = key.split('#')[0]
      console.log(testJson[lookupKey])
    }
  }
  return;
}


jsonMaker()