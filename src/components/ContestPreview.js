import React from 'react';

const ContestPreview = (contest) => (
    <div className="ContestPreview">
        <div className="categoryName">
            {contest.categoryName}
        </div>
        <div className="contestName">
            {contest.contestName}
        </div>
    </div>
);

export default ContestPreview;