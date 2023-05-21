import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTemperaments, postDog } from '../../redux/actions'
import validation from './validation';
import style from "./Form.module.css"
import { useNavigate } from 'react-router-dom';

function Form () {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { allTemperaments, allDogs } = useSelector(state => state)


  // Lo cargo nuevamente por si no se pasa por el home
  useEffect(() => {
    dispatch(getTemperaments())
  }, [dispatch])

  // Estado para data del formulario
  const [formData, setFormData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image: ""
  });

  // Estado para errores
  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: [],
    image: ""
  });

  // Control de cambios en los imput
  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({...formData, [name]: value})
    setErrors(validation({...formData, [name]: value})); // si no lo paso asi, la validacion esta un paso atrasada
    isNameDuplicate()
  }

  // Maneja la seleccion de temperamentos
  const handleTemperamentSelect = (event) => {
    const newTemp = event.target.value;
    if(formData.temperaments.includes(newTemp)) {
      alert(`${newTemp} ya se encuentra en la lista`)
      return;
    }
    setFormData({...formData, temperaments: [...formData.temperaments, newTemp]});
    event.target.value= "";
  }

  // Maneja la eliminacion de temperamentos
  const handleTemperamentDelete = (temp) => {
    setFormData({...formData, temperaments: formData.temperaments.filter(temperament => temperament !== temp)})
    return;
  }

  // Maneja la seleccion de imagen
  const handleImage = (event) => {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) setFormData({...formData, image: URL.createObjectURL(file)})
    else setFormData({...formData, image: ""})
  };

  const isNameDuplicate = () => {
    const nameDuplicate = allDogs.filter(dog => dog.name.toLowerCase() === formData.name.toLowerCase())
    if(nameDuplicate.length > 0) setErrors({...errors, name: "This breed alredy exists"})
  }

  const handleSubmit = (event) =>{

    event.preventDefault();
    dispatch(postDog(formData))
    console.log(formData.image);
    alert("Perro añadido exitosamente")

    setFormData({
      name: "",
      height: "",
      weight: "",
      life_span: "",
      temperaments: [],
      image: ""
    });

    navigate("/home")
  }

  const disableSubmit = () => {
    if(!formData.name || !formData.height || !formData.weight || !formData.life_span || formData.temperaments.length === 0 || !formData.image) return false;
    if(errors.name || errors.height || errors.weight || errors.life_span || errors.temperaments || errors.image) return false;
    return true
  }

  return (

      <div className={style.formContainer}>
        <h2>Complete the form to add your dog breed</h2>

        <form onSubmit={handleSubmit}>
          <div className={style.formData}>
            <label htmlFor="name">NAME</label>
            <input type="text" name="name" id="name" placeholder="Enter the name" autoComplete="off" value={formData.name} onChange={handleInputChange}/>
            {errors.name && <span className={style.error}>{errors.name}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="height">HEIGHT</label>
            <br />
            <input type="text" name="height" id="height" placeholder="Height xx - xx cm" autoComplete="off" value={formData.height} onChange={handleInputChange}/>
            {errors.height && <span className={style.error}>{errors.height}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="weight">WEIGHT</label>
            <br />
            <input type="text" name="weight" id="weight" placeholder="Weight xx - xx kg" autoComplete="off" value={formData.weight} onChange={handleInputChange}/>
            {errors.weight && <span className={style.error}>{errors.weight}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="life_span">LIFE SPAN</label>
            <br />
            <input type="text" name="life_span" id="life_span" placeholder="Life span xx - xx years" autoComplete="off" value={formData.life_span} onChange={handleInputChange}/>
            {errors.life_span && <span className={style.error}>{errors.life_span}</span>}
          </div>

          <div className={style.formData}>
            <label htmlFor="image">IMAGE</label>
            <br />
            {/* <input type="text" name="image" id="image" value={formData.image} onChange={handleInputChange}/> */}
            <input type="file" accept='image/*' name="image" id="image" onChange={handleImage}/>
            {errors.image && <span className={style.error}>{errors.image}</span>}
          </div>

          <div className={style.formData}>
            <select onChange={handleTemperamentSelect}>
              <option value="">TEMPERAMENTS</option>
              {allTemperaments?.map(temp => {
                return (
                  <option key={temp.id} name={temp.id} value={temp.name}>{temp.name}</option>
                );
              })}
            </select>
          </div>

          <div>
            <button type="submit" disabled={!disableSubmit()}>¡WOOF!</button>
          </div>
        </form>

        <div className={style.formDataTemp}>
          {formData.temperaments.map(temp =>
            <div className={style.formTemperaments} key={temp}>
              <p>{temp}</p>
              <button onClick={() => handleTemperamentDelete(temp)}>X</button>
            </div>
          )}
        </div>

      </div>
  )
}

export default Form