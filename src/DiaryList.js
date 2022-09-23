import { DiaryItem } from "./DiaryItem";

export const DiaryList = ({ onRemove, diaryList, onEdit }) => {
  return (
    <div className="DiaryList">
      <h2>diary list</h2>
      <h4>{diaryList.length}개의 일기가 있습니다.</h4>
      <div>
        {diaryList.map((it) => (
          <DiaryItem key={it.id} {...it} onRemove={onRemove} onEdit={onEdit} />
        ))}
      </div>
    </div>
  );
};

DiaryList.defaultProps = {
  // 이와같이 props의 초기값을 정해줄 수 있다!!
  diaryList: [],
};
