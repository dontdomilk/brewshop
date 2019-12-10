import React from 'react';
import Card from '../../components/card';
import './style.scss';

const temp = [
    {
        name: 'Beer 1',
        firstBrewed: "09/2013",
        description: 'lkansdfnasflk kjsadn  df jas fhjsad fdsafbhsdbafbdsajk fjdsahf ',
        imageUrl: 'https://images.punkapi.com/v2/keg.png',
        foodPairing: ['sushi', 'pizza','steak']
    },
    {
        name: 'Beer 2',
        firstBrewed: "09/2013",
        description: 'lkansdfnasflk kjsadn  df jas fhjsad fdsafbhsdbafbdsajk fjdsahf ',
        imageUrl: 'https://images.punkapi.com/v2/2.png',
        foodPairing: ['pizza','sushi',  'steak']
    },
    {
        name: 'Beer 3',
        firstBrewed: "09/2013",
        description: 'lkansdfnasflk kjsadn  df jas fhjsad fdsafbhsdbafbdsajk fjdsahf ',
        imageUrl: 'https://images.punkapi.com/v2/4.png',
        foodPairing: ['sushi', 'steak', 'pizza','steak']
    }
]

const Home = (props) => {

    return (
        <div className="home-content-wrapper">
            <div className="card-wrapper">
                {temp.map((item, i) => (
                    <Card
                        {...item}
                    />
                ))}

            </div>
        </div>
    )
}

export default Home;