import GiftDetails from '../models/giftDetails';
import Gifts from '../models/gifts';

export const GIFTS = [
    new Gifts('g1', 'Discount1', '30'),
    new Gifts('g2', 'Discount2', '100'),
    new Gifts('g3', 'Discount3', '200'),
]; 

export const GDETAILS = [
    new GiftDetails('d1', ['g1'],'900Care', 'Get 10% discount on a shampoo'),
    new GiftDetails('d2', ['g2'], 'The Body Shop', 'Get 10% discount on a vegan make up remover'),
    new GiftDetails('d3', ['g3'], 'BioCoop', 'Get 10% discount on almonds'),
]   
