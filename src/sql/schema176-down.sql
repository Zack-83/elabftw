-- revert schema 176
ALTER TABLE `items` DROP COLUMN `book_weekdays_restricted`;
ALTER TABLE `items` DROP COLUMN `book_min_start_time`;
ALTER TABLE `items` DROP COLUMN `book_max_end_time`;
UPDATE config SET conf_value = 175 WHERE conf_name = 'schema';
