-- revert schema 168
ALTER TABLE `items` DROP COLUMN `book_min_start_time`;
ALTER TABLE `items` DROP COLUMN `book_max_end_time`;
UPDATE config SET conf_value = 167 WHERE conf_name = 'schema';
