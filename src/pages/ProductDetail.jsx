import React ,{useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';

import { Button, Card, CardContent, CardDescription,CardHeader, CardMeta, Image } from 'semantic-ui-react';
import productService from '../Services/productService';

export default function ProductDetail(props) {
   let {id} = useParams();

   const [product, setProduct] = useState([])

   useEffect(() => {
    if (id) {
			productService.getProductById(parseInt(id)).then(response => {
				setProduct(response.data);
			});
    }
   }, [])
  
  
   

  return (
    <>
   

  <Card   fluid>

      <CardContent>
        <Image
          floated='center'
          size='mini'
          src={product.thumbnail}
        />
        <CardHeader>{product.title}</CardHeader>
        <CardMeta>{product.category}</CardMeta>
        <CardDescription>
          {product.description}
        </CardDescription>
      </CardContent>
      <CardContent extra>
        <div className='ui two buttons'>
          <Button basic color='green'>
            Sepete Ekle
          </Button>
          <Button basic color='red'>
            Sepetten Çıkar
          </Button>
        </div>
      </CardContent>
    </Card>

    </>
  )
}
