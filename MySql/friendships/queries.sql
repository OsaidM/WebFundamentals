use friendships;

-- select count(friendships.user_id) from (friendships),(users u)
-- INNER JOIN friendships FS ON u.id = FS.user_id
-- INNER JOIN users f ON FS.friend_id = f.id
-- where u.id = FS.user_id 


-- select u.id, u.first_name, u.last_name, f.first_name, f.last_name from users u
-- INNER JOIN friendships FS ON u.id = FS.user_id
-- INNER JOIN users f ON FS.friend_id = f.id
-- where u.id = FS.user_id;

-- 3
-- select count(u.id) , count(f.id) from users u
-- INNER JOIN friendships FS ON u.id = FS.user_id
-- INNER JOIN users f ON FS.friend_id = f.id
-- where u.id = FS.user_id 

-- 3
-- select count(u.id) + count(f.id) from users u
-- INNER JOIN friendships FS ON u.id = FS.user_id
-- INNER JOIN users f ON FS.friend_id = f.id
-- where u.id = FS.user_id;

-- 2
-- select u.id, u.first_name, u.last_name from users u
-- INNER JOIN friendships FS ON u.id = FS.user_id
-- INNER JOIN users f ON FS.friend_id = f.id
-- where f.id = 4;
