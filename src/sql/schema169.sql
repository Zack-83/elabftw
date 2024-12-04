-- schema 169
ALTER TABLE `items` ADD `book_min_start_time` TINYINT UNSIGNED NOT NULL DEFAULT 0 AFTER `book_cancel_minutes`;
ALTER TABLE `items` ADD `book_max_end_time` TINYINT UNSIGNED NOT NULL DEFAULT 0 AFTER `book_min_start_time`;
UPDATE config SET conf_value = 169 WHERE conf_name = 'schema';
