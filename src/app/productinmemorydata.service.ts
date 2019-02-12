import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Product } from './product';
import { ProductDetails } from './productdetails';


export class ProductInMemDataService implements InMemoryDbService {
    createDb() {
        const products: Product[] = [
            { id: 1, price: 100, title: 'pen' },
            { id: 2, price: 80, title: 'pencil' },
            { id: 3, price: 50, title: 'bat' },
            { id: 4, price: 120, title: 'ball' },
            { id: 5, price: 75, title: 'notepad' }
        ];
        const productdetails: ProductDetails[] = [
            {
                id: 1,
                price: 100,
                title: 'pen',
                inStock: true,
                expirydate: '23/02/2019',
                color: 'blue',
                manufacturingyear: '2018',
                counrymade: 'India'
            },
            {
                id: 2,
                price: 80,
                title: 'pencil',
                inStock: false,
                expirydate: '21/03/2019',
                color: 'red',
                manufacturingyear: '2016',
                counrymade: 'China'
            },
            {
                id: 3,
                price: 50,
                title: 'bat',
                inStock: true,
                expirydate: '23/03/2019',
                color: 'white',
                manufacturingyear: '2017',
                counrymade: 'USA'
            },
            {
                id: 4,
                price: 120,
                title: 'balll',
                inStock: true,
                expirydate: '25/03/2019',
                color: 'pink',
                manufacturingyear: '2018',
                counrymade: 'India'
            },
            {
                id: 5,
                price: 75,
                title: 'notepad',
                inStock: true,
                expirydate: '21/04/2019',
                color: 'white',
                manufacturingyear: '2018',
                counrymade: 'Japan'
            },

        ];
        return { products, productdetails };
    }
}
