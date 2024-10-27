const SectionTitle = ({ subTile, heading }) => {
  return (
    <div className="mx-auto my-8 text-center md:w-4/12">
      <p className="mb-5 text-yellow-600 ">---{subTile}---</p>
      <h3 className={"py-4 uppercase text-3xl border-y-4"}>{heading}</h3>
    </div>
  );
};

export default SectionTitle;
