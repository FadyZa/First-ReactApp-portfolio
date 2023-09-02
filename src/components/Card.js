import "../App.css";

export default function MyCard({ date, dateColor, job, address, cardText }) {
  return (
    <div className="card mb-4 rounded-3 p-5 w-75 align-items-center border-0 shadow">
      <div className="row g-2">
        <div className="col-lg-3 bg-body-tertiary p-4 rounded-4 text-center text-lg-start">
          <h5 className={`text-${dateColor} fw-bold`}>{date}</h5>
          <div>
            <p className="text-dark mb-0">{job}</p>
            <p className="text-muted mt-0">{address}</p>
          </div>
        </div>
        <div className="col-md-8 d-flex align-items-center">
          <div className="card-body">
            <p className="card-text">{cardText}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Last updated 3 mins ago
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
