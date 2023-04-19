DROP VIEW IF EXISTS AZ400;

CREATE VIEW AZ400 AS
SELECT json_group_array(json(replace(replace(replace(replace(questions, '\\r', '\r'), '\\n', '\n'), ':"true"', ':true'), ':"false"', ':false'))) as 'AZ400JSON'
FROM
    (
        SELECT
            json_object(
                'id',
                    q.Id,
                'question',
                    q.Question,
                'answers',
                    json_group_array(
                        json_object(
                            'answer', a.Answer,
                            'isCorrect', iif(a.IsCorrect = 1, 'true', 'false')
                        )
                    )
            ) as questions
        FROM
            Answers AS a INNER JOIN
            Questions AS q
                ON a.QuestionId = q.Id
        WHERE q.Exam = 'AZ400'
        GROUP BY q.Id
    ) as jsonAZ400Questions
