SELECT a.USER_ID, a.NAME, count(*)'posts amount' FROM USER a join POST p on p.USER_ID = a.USER_ID group by NAME having count(*) > 3;