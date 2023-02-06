import { useState } from "react";
import "./styles.css";

type FormData = {
  min?: number;
  max?: number;
}

type Props = {
  onFilter: Function;
}

export default function CardFilter({ onFilter }: Props) {
  
  const [formData, setFormData] = useState<FormData>({});

  function handleInputChange(event: any) {
    const value = event.target.value;
    const name = event.target.name;
    setFormData({...formData, [name]: value});
  }

  function handleSubmit(event:any) {
    event.preventDefault();
    const min = formData.min || 0;
    const max = formData.max || Number.MAX_VALUE;
    onFilter(min, max);
  }
  
  return (
    <form>
      <div className="container dsf-form-container mt20">
        <div className="dsf-form-control">
          <input 
          name="min"
          value={formData.min || ""}
          type="text" 
          placeholder="Preço mínimo" 
          onChange={handleInputChange} />
        </div>
        <div className="dsf-form-control">
          <input 
          name="max"
          value={formData.max || ""}
          type="text" 
          placeholder="Preço máximo" 
          onChange={handleInputChange} />
        </div>
        <div className="dsf-form-control">  
          <button onClick={handleSubmit}>Filtrar</button>
        </div>
      </div>
    </form>
  );
}
