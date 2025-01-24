interface SingleCategoryProps {
  name: string;
}

const SingleCategory = (props: SingleCategoryProps) => {
  return (
    <div className='d-flex justify-content-between align-items-center bg-dark rounded-3 mt-3 p-2'>
      <p>{props.name}</p>
      <i className='bi bi-chevron-right fs-6 ms-2'></i>
    </div>
  );
};

export default SingleCategory;
