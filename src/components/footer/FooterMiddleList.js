import React from 'react'

const FooterMiddleList = ({title,listitem}) => {
    console.log(listitem)
  return (
    <div>
    <h3 className="font-titleFont text-white text-base font-semibold mb-3">{title}</h3>
     <ul className="flex flex-col gap-2 font-bodyFont">
        {
            listitem.map((item)=>item.listData.map((data)=>(
                <li>{data}</li>
            )))
        }
      </ul>
    </div>
  );
}

export default FooterMiddleList