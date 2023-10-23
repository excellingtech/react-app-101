import React from 'react'

const Lists = () => {
    const data=[{
        name:"first",
        icon:"hii"
    },
    {
        name:"sec",
        icon:"hello"
    },
    {
        name:"third",
        icon:"hoo"
    },
];

//const itemlist=data.map((item,i)=><p>{item.name}</p>);
  return (

    <div>
     {/* {itemlist} */}
     {/* {data.map((item,i)=><p>{item.name}</p>)} */}
    {data.map((item,i)=>(
        <div key={i}>
            <p>{item.name}</p>
            <p>{item.icon}</p>
        </div>
    ))}

    </div>
  );
};

export default Lists
