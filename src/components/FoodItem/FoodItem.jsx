
import React from 'react';

function FoodItem() {
  const { id } = useParams();
  const [foodItem, setFoodItem] = useState(null);

  useEffect(() => {
    fetchFoodItem();
  }, []);

  const fetchFoodItem = async () => {
    try {
      const response = await fetch(`http://localhost:3000/foodItems/${id}`);
      const data = await response.json();
      setFoodItem(data);
    } catch (error) {
      console.error('Error fetching food item:', error);
    }
  };

  return (
    <div>
      {foodItem ? (
        <div>
          <h2>{foodItem.name}</h2>
          <p>Description: {foodItem.description}</p>
          <p>Price: ${foodItem.price}</p>
          <img src={`http://localhost:3000/${foodItem.image}`} alt={foodItem.name} style={{ maxWidth: '100%' }} />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default FoodItem
