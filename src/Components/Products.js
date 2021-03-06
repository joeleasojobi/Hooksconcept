import React, { useState } from 'react'
import { Avatar, Button, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core'
import axios from 'axios'



const Products = () => {

    const [products, setProducts] = useState([])

    const fetchProducts=()=>{
        axios.get("https://fakestoreapi.com/products").then((response)=>{
            setProducts(response.data)
        })
    }

  return (
    <div>
        <div style={{padding:55}}>
          <Grid container>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                  <h1>Products</h1>
                  <Button variant='contained' color='secondary' onClick={fetchProducts}>Get Products</Button>
                  <TableContainer>
                      <Table>
                          <TableHead>
                              <TableRow>
                                  <TableCell>Title</TableCell>
                                  <TableCell>Price</TableCell>
                                  <TableCell>Description</TableCell>
                                  <TableCell>category</TableCell>
                                  <TableCell>Image</TableCell>
                                  <TableCell>Rate</TableCell>
                                  <TableCell>Count</TableCell>
                              </TableRow>
                          </TableHead>
                          <TableBody>
                              {products.map((value,index)=>{
                                  return <TableRow>
                                      <TableCell>{value.title}</TableCell>
                                      <TableCell>{value.price}</TableCell>
                                      <TableCell>{value.description}</TableCell>
                                      <TableCell>{value.category}</TableCell>
                                      <TableCell><Avatar src={value.image}/></TableCell>
                                      <TableCell>{value.rating.rate}</TableCell>
                                      <TableCell>{value.rating.count}</TableCell>
                                  </TableRow>
                              })}
                          </TableBody>
                      </Table>
                  </TableContainer>
              </Grid>
          </Grid>
      </div>
    </div>
  )
}

export default Products