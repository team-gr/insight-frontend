import BestProduct from "main/feature-compare/BestProduct";
import CompareTable from "main/feature-compare/CompareTable";
import AddNewItemFromUrl from "main/feature-compare/AddNewItemFromUrl";

function FeatureCompare() {
  return (
    <>
      <AddNewItemFromUrl />
      <BestProduct />
      <CompareTable />
    </>
  );
}

export default FeatureCompare;
