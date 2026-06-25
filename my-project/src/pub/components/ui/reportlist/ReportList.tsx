import React from "react";
import "./ReportList.scss";

export interface ReportItem {
  id: number;
  title: string;
  answer: React.ReactNode;
}

interface ReportListProps {
  items: ReportItem[];
}

const ReportList: React.FC<ReportListProps> = ({ items }) => {
  return (
    <div className="report_wrap">
      <ul className="report_list">
        {items.map((item) => (
          <li key={item.id} className="report_item">
            <strong className="title">{item.title}</strong>
            <div className="answer_wrap">{item.answer}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReportList;
