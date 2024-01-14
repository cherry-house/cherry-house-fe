import React, { useState } from "react";
import "./Main.scss";
import PageWrapper from "../../components/base/PageWrapper";
import CardList from "../../components/card-list/CardList";
import CategoryBar from "./components/category-bar/CategoryBar";
import FloatingButton from "../../components/floating-button/FloatingButton";

export default function Main() {
  const categories = ["전체", "헤어", "네일/패디", "기타"];

  return (
    <PageWrapper>
      <div className="page">
        <div className="category">
          <CategoryBar categories={categories} />
        </div>
        <CardList />
        <FloatingButton />
      </div>
    </PageWrapper>
  );
}
