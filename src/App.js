import { useState } from 'react';
//import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Product from './components/Product';
//import Transaction from './components/Transactions';
//import Carts from './components/Carts';

const products = [
  {
    id: 1,
    name: "Oreo Cupcake",
    image: "https://img.kurio.network/F6I9fpIbiJl7nOd2MWK6t8ue4t4=/440x440/filters:quality(80)/https://kurio-img.kurioapps.com/20/10/02/938f6bba-c6d1-4cbb-84ab-ac8cf620cfaa.jpg",
    price: "Rp 12.000"
  },
  {
    id: 2,
    name: "Chiffon Cake Pandan",
    image: "https://haidiva.com/wp-content/uploads/2019/12/pandan-chiffon-cake-1536x864.jpg",
    price: "Rp 135.000"
  },
  {
    id: 3,
    name: "Strawberry Cupcake",
    image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/strawberry-cupcakes-f5f3d31.jpg?resize=960,872?quality=90&webp=true&resize=375,341",
    price: "Rp 15.000"
  },
  {
    id: 4,
    name: "Rainbow Cake",
    image: "https://img.okezone.com/content/2020/10/09/298/2290852/mudahnya-bikin-rainbow-cake-kukus-dicoba-yuk-vLoeLlKZKk.jpg",
    price: "Rp 75.000"
  },
  {
    id: 5,
    name: "Bolu Talas",
    image: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/04/13/300946405.jpg",
    price: "Rp 65.000"
  },
  {
    id: 6,
    name: "Cheese Cake",
    image: "https://assets.promediateknologi.com/crop/0x0:0x0/750x500/photo/ketiknews/original/211013113319-Resep.jpg",
    price: "Rp 105.000"
  },
  {
    id: 7,
    name: "Lava Cake",
    image: "https://asset.kompas.com/crops/fiFCU-9ypuFVKtYziKA56PZJWIU=/32x267:1000x912/750x500/data/photo/2022/04/05/624be3967c81a.jpg",
    price: "Rp 95.000"
  },
  {
    id: 8,
    name: "Lapis Legit",
    image: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/2018/07/04/860394509.jpg",
    price: "Rp 155.000"
  }
];

export default function App() {
  const [add, setAdd] = useState(0);
  const keranjang = `${add}`
  const addKeranjang = () => {
    setAdd((a) => a+1);
  }
  const minKeranjang = () => {
    setAdd((a) => a>0 ? a-1 : 0);
  }

  return (
    <div className="App">
      <Layout/>
      <div>{keranjang}</div>
      {products.map((p) => {
        return <Product name={p.name} image={p.image} price={p.price} onklik={minKeranjang} onClick={addKeranjang} />;
      })}

      {/* <Routes>
        <Route path="/transaction" component={Transaction}/>
        <Route path="/cart" component={Carts}/>
      </Routes> */}
    </div>
  );
}