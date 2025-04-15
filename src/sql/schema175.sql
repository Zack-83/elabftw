-- schema 175
ALTER TABLE `items`
    ADD `book_weekdays_restricted` JSON DEFAULT NULL AFTER `book_cancel_minutes`,
    ADD `book_min_start_time` TIME DEFAULT NULL AFTER `book_weekdays_restricted`,
    ADD `book_max_end_time` TIME DEFAULT NULL AFTER `book_min_start_time`;
