export default function Transaction() {
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
                                    <th>Date Transaction</th>
                                    <th>Items</th>
                                    <th>Total Items</th>
                                    <th>Total Price</th>
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
  