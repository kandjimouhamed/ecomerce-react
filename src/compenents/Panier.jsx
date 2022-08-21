import React, { Component } from 'react'
import { Item } from './Item'
import '../index'
export  class Panier extends Component {
  constructor(props) {
    super(props)
   this.state = {
    Items: [
    { id: 1, nomProduit: 'sac de Rix', prix: 25000, qte: 30},
    { id: 2, nomProduit: 'sac de Sucre', prix: 30000, qte: 40},
    { id: 3, nomProduit: 'carton halib', prix: 3500, qte: 47 },
    { id: 4, nomProduit: 'sac de Mille', prix: 35000, qte: 57},
    { id: 5, nomProduit: 'pot de Chocolat', prix: 10000, qte: 20 },
    ],
  Panier: [],
  NouveauTab: []
 
}
  }
  recevoirItem =item=> {
    this.state.Panier.push(item);
    // const [id,nomProduit, prix] = this.state.Items;
    // const items = this.state.Items.slice();
    // console.log(items);
    // const iteme = item.map(e=>e.qte);
    // const quantite = item.qte +1;
    // items.push({id :item.id ,nomProduit:item.nomProduit,prix :item.prix, qte: quantite})
    const nn = {...item, qte: item.qte-1 }
    // console.log(items);
    // console.log(iteme);

    this.setState({Items: nn})
    this.setState({Panier: this.state.Panier})
    
   }
   update = (item)=>{
    console.log(item);
    // console.log(ntab);
    // const ntab = this.state.NouveauTab.push(item)
    const nn = {...item, qte: item.qte-1 }
    const mm =[...this.state.Items, item = nn];
     this.setState({Items: mm})

    console.log(nn);
    // const [id,nomProduit, prix] = this.state.Items;
    //  const items = this.state.Items.slice();
    //  const quantite = qte+1;
    //  const tab = ({id:id, nomProduit:nomProduit,prix:prix,qte: quantite})
    //  const tt =items.push(tab)
    //  console.log(quantite);
    //  console.log(tab);
    //  console.log(tt);

    //  this.setState({Items: tt})
  
    //  const index = items.findIndex(item=>item.id == id);
    //  const map = items.some(item=>item.id == id );
    //  const map = items.find(item=>item.qte);
    //  const mm = map.filter(e=>e.qte)
    //  console.log(qte);

    //  console.log(map);
     
   
   }
  render(){
    const {Items, Panier} = this.state
    return (
        <div className='container mt-4'>
            <h1>Listes des Produits</h1>
            <table className='table table-striped'>
                <thead className = "bg-primary">
                  <tr>
                    <th>id</th>
                    <th>Nom du Produit</th>
                    <th>Prix</th>
                    <th>Quantite</th>
                    <th>Shoping</th>
                  </tr>
                </thead>
                <tbody>
                  {Items.map((item, i) => (
                  <Item key={i.toString()} item={item} recevoirItem = {this.recevoirItem} update = {this.update} />
                  ))
                 } 
               </tbody>
          </table>
            <p className='prix-panier alert alert-success'>prix à payer: $ {parseFloat(Panier.reduce((acc,prx) => acc += prx.prix, 0))}</p>
            {/* <p className='qte-panier'>quantité d’articles: {Panier.length <= 0 ? 'Panier vide': Panier.length}</p>   */}
            <div className="parant">
                <p><img src="./basket.jpg" alt="le panier"  className='img'/></p>
                <p className='qte-panier'> {Panier.length <= 0 ? '0': Panier.length}</p>
            </div>
        </div>
    )
  }
}

