import React, { Fragment } from "react";
import { useForm } from "react-hook-form";


const FormBasic = () => {
    
    const {register,handleSubmit,formState:{errors}} = useForm()

    const submitData=(data) =>{
        console.log(data)
    }

    return(
        <Fragment>
            <h2>Ingresar Producto</h2>

            <form className="form-react" onSubmit={handleSubmit(submitData)}>
            <div className="form-control">
            <label>Nombre: </label>
            <input type= "text" {...register('name',{required:true,maxLength:100})}/>

            {errors.name?.type === "required" && <small className="fail">El campo nombre debe de estar lleno.</small>}
            {errors.name?.type === "maxLength" && <small className="fail">El Nombre no debe ser mayor a 100 caracteres
            .</small>}
            </div>
                
            <div className="form-control">
            <label>Categoria:  </label>
            <input type= "text" {...register('category')}/>
            </div>

            <div className="form-control">
            <label>Precio:  </label>
            <input type= "text" {...register('price')}/>
            </div>


            <div className="form-control">
            <label>Precentacion:  </label>
            <input type= "text" {...register('presentation')}/>
            </div>

            <div className="form-control">
            <label>Tamaño:  </label>
            <input type= "text" {...register('size')}/>
            </div>

            <div className="form-control">
            <label>Descripcion:  </label>
            <br></br>
            <textarea maxLength="200" cols="50" placeholder="Ingresa la descripcion del producto" wrap="hard"
             {...register("description")}></textarea>
            </div>

            <button type="submit">Guardar</button>
            </form>
        </Fragment>
    );
}

export default FormBasic