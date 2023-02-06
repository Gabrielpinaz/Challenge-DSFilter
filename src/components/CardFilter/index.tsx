import "./styles.css";

export default function CardFilter() {
  return (
    <form>
      <div className="container dsf-form-container mt20">
        <div className="dsf-form-control">
          <input type="text" placeholder="Preço mínimo" />
        </div>
        <div className="dsf-form-control">
          <input type="text" placeholder="Preço máximo"/>
        </div>
        <div className="dsf-form-control">  
          <button>Filtrar</button>
        </div>
      </div>
    </form>
  );
}
