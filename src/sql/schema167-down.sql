-- revert schema 167
ALTER TABLE `items` DROP COLUMN `book_min_start_time`;
ALTER TABLE `items` DROP COLUMN `book_max_end_time`;
UPDATE config SET conf_value = 166 WHERE conf_name = 'schema';
