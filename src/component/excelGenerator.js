import React from 'react'
import Workbook from 'react-excel-workbook'

export default ({data}) =>{
console.log('data tmam', data);
    return(
        <div className="row text-center" style={{marginVertical:'3px'}}>
        <Workbook filename="sahluesrs.xlsx" element={<button className="btn btn-lg btn-primary">download all system user!!</button>}>
          <Workbook.Sheet data={data} name="Sheet A">
            <Workbook.Column label="fullName" value="fullName"/>
            <Workbook.Column label="mobileNumber" value="mobileNumber"/>
          </Workbook.Sheet>
          </Workbook>
      </div>
    )
}