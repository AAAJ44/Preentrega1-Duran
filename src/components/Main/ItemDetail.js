import ItemCount from './ItemCount';

const ItemDetail = ({ item }) => {
    return (
        <div className="container-detail">
            <img src={item.img} alt="" />
            <div>
                <h2>{item.title}</h2>
                <p>
                    Las mejores marcas y las mejores zapas a solo un click
                </p>
                <p>
                    No dudes en preguntar!
                </p>
                <ItemCount stock={10} initial={1} />
            </div>
        </div>
    );
};

export default ItemDetail;