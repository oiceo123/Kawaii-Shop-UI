import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useAppDispatch, useAppSelector } from "../../redux";
import { fetchCategoryDataAsync } from "../../redux/slices/category/categorySlice";
import { Category } from "../../redux/slices/category/types";

import CardGridComponent from "../../components/CardGrid";

const CategoryContainer: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { data } = useAppSelector((state) => state.categories);

  useEffect(() => {
    dispatch(fetchCategoryDataAsync());
  }, []);

  const renderCustomItem = (item: Category) => <>{item.title}</>;

  return (
    <>
      <CardGridComponent
        data={data}
        title={t("page.header.home.title.category")}
        bordered={true}
        style={{ width: "10%", height: "151px", textAlign: "center" }}
        renderItem={renderCustomItem}
      />
    </>
  );
};

export default CategoryContainer;
