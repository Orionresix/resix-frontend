import React from 'react'
import '../Completework.css'

const Completework = () => {

    const [formData, setFormData] = useState({
        descriptionOfWork: '',
        materialsUsed: '',
        laborCost: '',
        materialCost: ''
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const response = await fetch('', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
          });
          if (response.ok) {
            alert('Form submitted successfully!');
            setFormData({
              descriptionOfWork: '',
              materialsUsed: '',
              laborCost: '',
              materialCost: ''
            });
          } else {
            throw new Error('Failed to submit form');
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to submit form');
        }
      };

  return (
    <div>
      <div className='Welcome'>
        <h1>Complete work order</h1>
        <p>Describe the work done and cost below</p>
      </div>

      <div>
      <form onSubmit={handleSubmit}>
        <div className='formgroup'>
          <label>Description of Work:</label>
          <textarea
            name="descriptionOfWork"
            value={formData.descriptionOfWork}
            onChange={handleChange}
            placeholder="Enter description of work"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Materials Used:</label>
          <textarea
            name="materialsUsed"
            value={formData.materialsUsed}
            onChange={handleChange}
            placeholder="Enter materials used"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Labor Cost:</label>
          <input
            type="number"
            name="laborCost"
            value={formData.laborCost}
            onChange={handleChange}
            placeholder="Enter labor cost in Ksh"
            required
          />
        </div>
        <div className='formgroup'>
          <label>Material Cost:</label>
          <input
            type="number"
            name="materialCost"
            value={formData.materialCost}
            onChange={handleChange}
            placeholder="Enter material cost in Ksh"
            required
          />
        </div>
        <div>

        <Button type='submit' className='completework_button' variant='contained'>
            Submit Work Order
          </Button>
          
        </div>
      </form>
      </div>
    </div>
  )
}

export default Completework
