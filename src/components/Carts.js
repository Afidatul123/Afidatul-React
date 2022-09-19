import React from 'react'

function Carts() {
  return (
    <>
    <div className="container-xl">
            <div className="row align-items-center">
                <div className="col">
                    <h2 className="page-title">Transactions</h2>
                </div>
            </div>
        </div>
        <div className="page-body">
            <div className="container-xl">
                <div className="row row-cards">
                    <div className="col-12">
                        <table>
                            <thead>
                                <tr>
                                    <th width="30%" colSpan="2">
                                    Product
                                    </th>
                                    <th width="20%">Price</th>
                                    <th width="20%">Quantity</th>
                                    <th width="20%">Total</th>
                                </tr> 
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Carts