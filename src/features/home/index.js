import React, {useEffect, useState} from 'react';
import Card from '../../components/card';
import HomepageContainer from '../../core/home';
import BeerCardModal from '../../components/modal/beer-card';
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


const HomeGUI = (props) => {

    const {beers} = props;

    const [modal, setModal] = useState({
        open: false,
        data: {
            basic: {
                name:''
            }
        }
    })

    const onCardClick = (id) => {

        const data = props.beers.find(i => i.id === id);

        setModal({
            ...modal,
            open: true,
            data
        })

    }

    const toggleModal = () => setModal({...modal, open: !modal.open})

    useEffect(() => {
        props.getBeers();
    },[]);

    return (
        <div className="home-content-wrapper">
            <div className="card-wrapper">
                {beers && beers.map((item, i) => (
                    <Card
                        onClick={onCardClick}
                        key={`beer-card-${i}`}
                        id={item.id}
                        {...item.basic}
                    />
                ))}
                {<BeerCardModal
                    toggle={toggleModal}
                    open={modal.open}
                    data={modal.data}
                />}
            </div>
        </div>
    )
}

export default HomepageContainer(HomeGUI);