import React from 'react'

const Card = ({ data }) => {

  return (
    <div>
      
        {/* <div className='p-2 mr-10 text-gray-400 flex flex-col'>Name of the Holdings
        
          {
            

            data.map(d => (
              <h1  className='text-blue-900 '>{d.name}</h1>
            ))
            

          }
          </div>
      

      <div className='flex'>



        <h1 className='p-2 ml-10 mr-10 text-gray-400'>Ticker
          {

            data.map(d => (
              <h1 className='text-blue-900'>{d.ticker}</h1>
            ))


          }
        </h1>
      </div>

      <h1 className='p-2 ml-10 mr-10 text-gray-400 flex flex-col'>Average Price
        {

          data.map(d => (
            <h1 className='text-blue-900'>{d.avg_price}</h1>
          ))

        }
      </h1>
      <h1 className='p-2 ml-10 mr-10 text-gray-400 flex flex-col'>Market Price
        {

          data.map(d => (
            <h1 className='text-blue-900'>{d.market_price}</h1>
          ))

        }
      </h1>
      <h1 className='p-2 ml-10 mr-10 text-gray-400 flex flex-col '>Latest Change Percentage
        {

          data.map(d => (
            <h1 className='text-blue-900'>{d.latest_chg_pct}</h1>
          ))

        }
      </h1>
      <h1 className='p-2 ml-10 mr-10 text-gray-400 flex flex-col'>Market Value in Base CCV
        {

          data.map(d => (
            <h1 className='text-blue-900'>{d.market_value_ccy}</h1>
          ))

        }
      </h1> */}
      <table className="table-auto ">
        <thead>
          <tr>
            <th className=" text-gray-400  px-4 py-2">Name</th>
            <th className=" text-gray-400  py-2">Ticker</th>
            <th className=" text-gray-400 border-gray-500 px-4 py-2">Average Price</th>
            <th className=" text-gray-400 border-gray-500 px-4 py-2">Market Price</th>
           
            <th className=" text-gray-400 border-gray-500 px-4 py-2">Latest Change Percentage</th>
            <th className=" text-gray-400 border-gray-500 px-4 py-2">Market Value in Base CCV</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}>
              <td className=" border-gray-500 px-4 py-2">{item.name}</td>
              <td className=" border-gray-500 px-4 py-2">{item.ticker}</td>
              <td className=" border-gray-500 px-4 py-2">{item.avg_price}</td>
              <td className=" border-gray-500 px-4 py-2">{item.market_price}</td>
              <td className={` border-gray-500 px-4 py-2 ${item.latest_chg_pct < 0 ? 'text-red-500' : ''}`}>{item.latest_chg_pct}</td>
              <td className=" border-gray-500 px-4 py-2">{item.market_value_ccy}</td>
            </tr>
          ))}
        </tbody>
      </table>

     

    </div>
  )
}

export default Card