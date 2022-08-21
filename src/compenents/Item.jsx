import React, { Component } from 'react'
import '../bootstrap.min.css'

export  class Item extends Component {

  render() {
    const {id,nomProduit,prix,qte} = this.props.item
    return (
      <tr key={id}>
          <td> 
            {id} 
          </td>
          <td> 
            {nomProduit} 
          </td>
          <td> 
            {prix} 
          </td>
          <td> 
            {qte} 
          </td>
            <button onClick={()=> this.props.recevoirItem(this.props.item)}  className= "btn btn-info mt-2">Panier</button>
            <button onClick={()=> this.props.update(this.props.item)}  className= "btn btn-success mt-2">Quantite</button>
            
{/* 
            <div>
              {this.props.item.productName.forEach(element => {
                <div>
                  
                  <h2>{element.productName}</h2>
                  
                </div>
                
              })}
            </div> */}
      </tr>
      
    )
  }
}