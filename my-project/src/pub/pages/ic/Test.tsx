import "../../assets/styles/style.scss";
import ReportList from "../../components/ui/reportlist/ReportList";

const Test = () => {
  const reportItems = [
    {
      id: 1,
      title: "관리조치보고명",
      answer: (
        <>
          <p>신탁업무 절차 점검 결과 검토</p>
        </>
      ),
    },
    {
      id: 2,
      title: "기안부서",
      answer: (
        <>
          <p>자산관리그룹</p>
        </>
      ),
    },
    {
      id: 3,
      title: "기안자",
      answer: (
        <>
          <p>김우리</p>
        </>
      ),
    },
    {
      id: 4,
      title: "AI분석일자",
      answer: (
        <>
          <p>2026-05-07 04:14</p>
        </>
      ),
    },
    {
      id: 5,
      title: "집중점검판단유형",
      answer: (
        <>
          <p>과거 관리조치 수행 이력 + 감독기관 보도자료</p>
        </>
      ),
    },
  ];

  return (
    <div>
      <h1>Tailwind Test</h1>
      <ReportList items={reportItems} />
    </div>
  );
};

export default Test;
