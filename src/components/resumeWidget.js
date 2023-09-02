export default function Widget({ content }) {
  return (
    <div class="col-12 col-md-4">
      <div class="p-3 bg-light rounded-3 text-dark text-uppercase fw-medium">
        {content}
      </div>
    </div>
  );
}
